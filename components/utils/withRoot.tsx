import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { useTranslation } from "next-i18next";

import {
  MuiThemeProvider,
  StylesProvider,
  createMuiTheme,
  jssPreset,
} from '@material-ui/core/styles';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function withRoot(Component: any) {
  function WithRoot(props: any) {
    // JssProvider allows customizing the JSS styling solution.
    const { i18n } = useTranslation();

    return (
      <StylesProvider jss={jss}>

        <MuiThemeProvider theme={createMuiTheme({
          direction: i18n.dir()
        })}>
          <Component {...props} />
        </MuiThemeProvider>
      </StylesProvider>
    );
  }

  return WithRoot;
}

export default withRoot;