import React from 'react'
import Link from 'next/link'

function error() {
    return (
        <section className="error-page">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="error-page-content text-center">
                            <h1>404</h1>
                            <h2>خطأ</h2>
                            <p>الصفحة التي تبحث عنها غير موجودة &#128531; &#128531; &#128531;</p>
                            <Link href="/">
                                <a className="btn btn-primary">الرئيسية</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default error