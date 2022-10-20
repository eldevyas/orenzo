import React from 'react'
import Button from '@mui/material/Button'

export default function Mailing() {
    return (
        <>
            <div className="Mailing">
                <div className="Title">
                    <h1>
                        Receive Exclusive Content in your email
                    </h1>
                    <p>
                        Get notified about company updates, news and blog posts. We hate spam.
                    </p>
                </div>

                <div className="InputField">
                    <input type="email" name="email" placeholder="Input Your Email"/>
                    <Button variant="contained" className="Button">Subscribe</Button>
                </div>

                <div className="PS">
                    Cancel anytime with one click. All against SPAM!
                </div>
            </div>
        </>
    )
}