import React from 'react'
import Button from '@mui/material/Button'
import { useTranslation } from 'next-i18next'


export default function Mailing() {
    const { t } = useTranslation('common')

    return (
        <>
            <div className="Mailing">
                <div className="Title">
                    <h1>
                        { t('home.content.Mailing.title') }
                    </h1>
                    <p>
                    { t('home.content.Mailing.description') }
                    </p>
                </div>

                <div className="InputField">
                    <input type="email" name="email" placeholder={t('home.content.Mailing.input.placeholder')}/>
                    <Button variant="contained" className="Button">
                        { t('home.content.Mailing.input.button') }
                    </Button>
                </div>

                <div className="PS">
                    { t('home.content.Mailing.label') }
                </div>
            </div>
        </>
    )
}