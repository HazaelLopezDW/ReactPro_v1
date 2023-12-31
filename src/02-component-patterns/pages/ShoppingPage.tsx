import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <>
      <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title title={'Hola cafe'}/>
            <ProductCard.Buttons />
          </ProductCard>

          <ProductCard product={product}>
            <ProductImage />
            <ProductTitle title={'Hola cruel cafe'}/>
            <ProductButtons />
          </ProductCard>
        </div>
      </div>
    </>
  )
}
