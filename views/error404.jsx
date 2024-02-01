const React = require('react')
const Def = require('./default')


function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                <img src="/images/boner-zone.jpg" alt="Heart Candy"/>
                </div>
                Photo by <a href="https://unsplash.com/@patrickperkins?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Patrick Perkins</a> on <a href="https://unsplash.com/photos/white-and-black-no-smoking-sign-6GPnG1H3njI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
  
                <p>Oops! Looks like you're having a HARD TIME! Sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}


module.exports = error404