import { TextLink } from '../components/atoms/TextLink'
import { PageSection } from '../components/templates/PageSection'

export function NotFound() {
  return (
    <PageSection eyebrow="404" title="That page is not here.">
      <p>The path may have moved, or it may not exist yet.</p>
      <TextLink to="/">
        Return home
      </TextLink>
    </PageSection>
  )
}
