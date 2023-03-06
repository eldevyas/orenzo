import React, {useState, useEffect} from 'react'
import Header from '../../layout/header'
import Image from "next/image"
import Footer from '../../layout/footer'
import { useRouter } from 'next/router'
import { DefaultButton } from "./../../core/buttons"
import Stack from '@mui/material/Stack';
import { useTranslation } from 'next-i18next';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
});

export default function ServicesPage() {
    const router = useRouter()
    const { pathname, asPath, query } = router

    const { t } = useTranslation('common');
    console.log(t);

    const changeLocale = (LocaleString: string) => {
        router.push({ pathname, query }, asPath, { locale: LocaleString })
        console.log('%c Locale has been changed to:', 'background: #222; color: #bada55', LocaleString)
    }

    return (
        <div className="ServicesPage">
            <div className="Background"></div>
            <Header/>

            <Stack spacing={5} sx={{margin: "100px 0"}} justifyContent="center" alignItems="center">
                <Stack spacing={1}  justifyContent="center" alignItems="center">
                    <div className="Text">
                        <div className="Title">
                            {t('services.content.testing.title')}
                        </div>
                        <div className="Description">
                            {t('services.content.testing.description')}
                        </div>
                    </div>
                </Stack>

                <Stack direction="row" spacing={2}>
                    <DefaultButton bgColor="Red" onClick= {() => {changeLocale("en")} }>
                        {t('services.content.testing.buttons.English')}
                    </DefaultButton>
                    <DefaultButton bgColor="Black" onClick= {() => {changeLocale("ar")} }>
                        {t('services.content.testing.buttons.Arabic')}
                    </DefaultButton>
                    <DefaultButton bgColor="Blue" onClick= {() => {changeLocale("fr")} }>
                        {t('services.content.testing.buttons.French')}
                    </DefaultButton>
                </Stack>
            </Stack>

            <Footer/>
        </div>
    )
}