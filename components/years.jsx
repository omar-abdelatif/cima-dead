import React from 'react'
function years({ results }) {
    const Years = [
        { year: '2000' }, { year: '2001' }, { year: '2002' }, { year: '2003' }, { year: '2004' }, { year: '2005' }, { year: '2006' }, { year: '2007' }, { year: '2008' }, { year: '2009' }, { year: '2010' }, { year: '2011' }, { year: '2012' }, { year: '2013' }, { year: '2014' }, { year: '2015' }, { year: '2016' }, { year: '2017' }, { year: '2018' }, { year: '2019' }, { year: '2020' }, { year: '2021' }, { year: '2022' }
    ]
    return (
        <section className="years">
            <div className="overlay"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="years-list">
                            {Years.map(year => (
                                <div className="years-item" key={year.year}>
                                    <a className='btn hexagon' href={`/years/${year.year}`}>{year.year}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default years

