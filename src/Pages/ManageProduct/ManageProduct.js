// import React, { useEffect, useState } from 'react';
// import ManageProducts from '../ManageProducts/ManageProducts';

// const ManageProduct = () => {
//     const [itemsProduct, setItemsProduct] = useState([]);


//     useEffect(() => {
//         fetch('http://localhost:5000/item')
//             .then(res => res.json())
//             .then(data => setItemsProduct(data));
//     }, [])
//     return (
//         <div className='my-28 mx-12'>
//             <div className='text-center mb-10'>
//                 <h3 className='text-primary text-4xl font-bold uppercase'>Tools area</h3>
//             </div>
//             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
//                 {
//                     itemsProduct.slice(0, 6).map(item => <ManageProducts
//                         key={item._id}
//                         item={item}
//                     ></ManageProducts>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default ManageProduct;