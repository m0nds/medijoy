import { useParams, Navigate } from 'react-router-dom'
import SkinConcernDetail from '../components/SkinConcernDetail'
import { SKIN_CONCERN_DETAILS } from '../data/skinConcerns'

export default function SkinConcernDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const concern = slug ? SKIN_CONCERN_DETAILS[slug] : null

  if (!concern) {
    return <Navigate to="/skin-concerns" replace />
  }

  return (
    <SkinConcernDetail
      id={concern.slug}
      title={concern.title}
      heroImage={concern.heroImage}
      whatIs={concern.whatIs}
      howWeHelp={concern.howWeHelp}
      treatments={concern.treatments}
    />
  )
}
