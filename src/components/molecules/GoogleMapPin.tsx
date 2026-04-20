import { useEffect, useRef, useState } from 'react'
import styles from './GoogleMapPin.module.scss'

type LatLngLiteral = {
  lat: number
  lng: number
}

type MapOptions = {
  center: LatLngLiteral
  disableDefaultUI: boolean
  mapId: string
  zoom: number
}

type GoogleMap = object

type MapsLibrary = {
  Map: new (element: HTMLElement, options: MapOptions) => GoogleMap
}

type MarkerLibrary = {
  AdvancedMarkerElement: new (options: {
    map: GoogleMap
    position: LatLngLiteral
    title: string
  }) => object
}

type GoogleMapsNamespace = {
  importLibrary: (library: 'maps' | 'marker') => Promise<unknown>
}

declare global {
  interface Window {
    google?: {
      maps: GoogleMapsNamespace
    }
  }
}

type GoogleMapPinProps = {
  address: string
  className?: string
  label: string
  position: LatLngLiteral
}

let googleMapsPromise: Promise<GoogleMapsNamespace> | undefined

function loadGoogleMaps(apiKey: string) {
  if (window.google?.maps) {
    return Promise.resolve(window.google.maps)
  }

  if (!googleMapsPromise) {
    googleMapsPromise = new Promise((resolve, reject) => {
      const callbackName = `initGoogleMaps${Date.now()}`
      const script = document.createElement('script')
      const params = new URLSearchParams({
        callback: callbackName,
        key: apiKey,
        v: 'weekly',
      })

      Object.assign(window, {
        [callbackName]: () => {
          if (window.google?.maps) {
            resolve(window.google.maps)
          } else {
            reject(new Error('Google Maps did not initialize.'))
          }

          Reflect.deleteProperty(window, callbackName)
        },
      })

      script.async = true
      script.defer = true
      script.onerror = () => reject(new Error('Google Maps failed to load.'))
      script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`

      document.head.append(script)
    })
  }

  return googleMapsPromise
}

export function GoogleMapPin({
  address,
  className,
  label,
  position,
}: GoogleMapPinProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const status = apiKey ? 'idle' : 'missing-key'
  const [hasError, setHasError] = useState(false)
  const classNames = className
    ? `${styles.mapShell} ${className}`
    : styles.mapShell

  useEffect(() => {
    const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID ?? 'DEMO_MAP_ID'

    if (!apiKey) {
      return
    }

    let isMounted = true

    async function initializeMap() {
      try {
        const googleMaps = await loadGoogleMaps(apiKey)
        const { Map } = (await googleMaps.importLibrary('maps')) as MapsLibrary
        const { AdvancedMarkerElement } = (await googleMaps.importLibrary(
          'marker',
        )) as MarkerLibrary

        if (!isMounted || !mapRef.current) {
          return
        }

        const map = new Map(mapRef.current, {
          center: position,
          disableDefaultUI: true,
          mapId,
          zoom: 15,
        })

        new AdvancedMarkerElement({
          map,
          position,
          title: label,
        })
      } catch {
        if (isMounted) {
          setHasError(true)
        }
      }
    }

    initializeMap()

    return () => {
      isMounted = false
    }
  }, [apiKey, label, position])

  if (status === 'missing-key') {
    return (
      <div className={classNames}>
        <p className={styles.fallbackLabel}>Map location</p>
        <p className={styles.fallbackText}>
          Add VITE_GOOGLE_MAPS_API_KEY to show the Google map pin.
        </p>
        <p className={styles.address}>{address}</p>
      </div>
    )
  }

  if (hasError) {
    return (
      <div className={classNames}>
        <p className={styles.fallbackLabel}>Map unavailable</p>
        <p className={styles.address}>{address}</p>
      </div>
    )
  }

  return (
    <div className={classNames}>
      <div
        aria-label={`${label}: ${address}`}
        className={styles.mapCanvas}
        ref={mapRef}
        role="img"
      />
    </div>
  )
}
