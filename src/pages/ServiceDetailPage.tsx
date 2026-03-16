import { useParams, Navigate } from 'react-router-dom'
import ServiceDetail from '../components/ServiceDetail'
import { getServiceBySlug } from '../data/services'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : null

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return <ServiceDetail service={service} />
}
