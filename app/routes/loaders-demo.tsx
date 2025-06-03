import type { Route } from "./+types/loaders-demo"

interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string | null;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: number;
  latitude: number;
  phone: string;
  website_url: string;
  state: string;
  street: string;
}

export async function loader() {
    const response = await fetch('https://api.openbrewerydb.org/v1/breweries')
    const breweries: Brewery[] = await response.json()

    console.log(breweries)

    return {
        title: "RR7",
        breweries
    }
}

export default function ({ loaderData }: Route.ComponentProps) {
    return <>
    <h2>{loaderData.title}</h2>

    <ul>
        {loaderData.breweries.map(brewery => (
            <li key={brewery.id}>{brewery.name}</li>
        ))}
    </ul>
    </>
}