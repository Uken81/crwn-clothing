import { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from './shop.data'

const ShopPage = () => {
const [collections, setCollections] = useState(SHOP_DATA);

    return (  
      <div className="shop-page">
         {collections.map(({id, title, items}) => (
            <CollectionPreview key={id} title={title} items={items} />
           ))
         }
      </div>
    );
}

export default ShopPage;