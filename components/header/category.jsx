import React from 'react'
import requests from '../../utils/requests'
import { useRouter } from 'next/router';
function Category() {
    const router = useRouter();
    return (
        <section className="categories">
            <div className="container-fluid">
                <div className="cat-content">
                    {Object.entries(requests).map(([key, { title, url }]) => (
                        <div className="cat-item" key={key} onClick={() => router.push(`/?genre=${key}`)}>
                            <h2>{title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Category