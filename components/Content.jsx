import React from 'react'
import { CONTEXT } from '../constants/variables'

const Content = () => {
    return (
        <>
            <div className="card my-1 shadow-xl">
                <div className="card-body">
                    <h1 className="card-title">What is {CONTEXT.MAIN_KEYWORD}?</h1>

                    <p>Free Password Generator is an online tool to generate random passwords of your choice in numbers, uppercase, lowercase, and symbol combinations.</p>

                    <h2 className="card-title">What makes a password strong?</h2>

                    <h3><b>Strong passwords are unique and random.</b></h3>

                    <p>
                        People aren&apos;t very good at coming up with passwords that are either of these things, let alone both. That&apos;s why we created <b>&quot;Free Password Generator&quot;</b> Strong Password Generator to create safe, memorable passwords for you. 81% of data breaches are caused by reused or weak passwords, so random, unique passwords are your best defense against online threats.
                    </p>
                    <h2 className="card-title">Why should my password be unique?</h2>

                    <p>
                        If you use the same password for both your email account and your bank account login, an attacker only needs to steal one password to gain access to both accounts, doubling your risk. If you&apos;ve used the same password for 14 different accounts, you&apos;re making it very, very easy for an attacker. You can protect yourself by using a generator to create unique passwords that are easy to remember.
                    </p>
                    <h2 className="card-title">Why should my password be random?</h2>

                    <p>
                        Random passwords are hard to guess and harder for computer programs to crack. If there is a recognizable pattern, the likelihood of an attacker using a brute force attack to gain access to your account increases exponentially. Random passwords can contain a jumble of unrelated characters, but combining unrelated words also works. This is how Free Password Generator Strong Password Generator creates passwords that are easy to remember, yet cryptographically strong.
                    </p>


                </div>
            </div>
        </>
    )
}

export default Content