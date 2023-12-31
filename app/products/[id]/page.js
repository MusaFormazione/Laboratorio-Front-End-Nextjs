import Image from "next/image"
// const getProduct = async (id) => {
//   console.log(id)
//   const res = await fetch(`http://localhost:3000/api/Products/${id}`)
//   return res.json();
// }

export async function generateStaticParams() {
  console.log('**** static params ***')
  const posts = await fetch(`https://fakestoreapi.com/products/`).then((res) => res.json())
 
  return posts.map((post) => ({
    id: post.id.toString(),
  }))
}

async function getProduct(id) {
  const res = await fetch(`
    https://fakestoreapi.com/products/${id}`, 
    // {next:{revalidate: 10}}
  ).then(data => {
      return data;
    })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Product({params}) {
  console.log(params)
  let productDetails = await getProduct(params.id);
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h3>This is a product: ID {params.id}</h3>
      <div className="bg-slate-800 p-8">
        <h2 className="text-xl text-center mb-6">{productDetails.title}</h2>
        <Image src={productDetails.image} alt="product image" className="mx-auto"
          width={300}
          height={300}
         />
        <p>{productDetails.description}</p>
      </div>
    </div>
  )
}
