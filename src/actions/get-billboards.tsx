import { Billboard } from '@/types'
import queryString from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`
interface Query {
  onHomepage?: boolean
}
const getBillboard = async (query: Query): Promise<Billboard[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      onHomepage: query.onHomepage
    }
  })

  const res = await fetch(url)

  return res.json()
}

export default getBillboard
