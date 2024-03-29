const React = require('react')
const Def = require('./default')


function home () {
    return (
        <Def>
            <main>
                <h1>Let's Eat</h1>
                <div class="position-absolute top-50 start-50 translate-middle">
                    <img src="/images/noodles-bowl.jpg" alt="Ramen Bowl"/>
                     <div>
                     Photo by <a href="https://unsplash.com/@bonvivant?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Bon Vivant</a> on <a href="https://unsplash.com/photos/ramen-dish-qom5MPOER-I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                     </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}


module.exports = home