import { useState, createContext, useContext } from 'react';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Platform } from 'react-native';
import * as Sharing from 'expo-sharing';

export async function GeneratePDF() {
    const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;
    try {
        const { uri } = await Print.printToFileAsync({
            html,
            base64: false,
        });

        // Share sheet (preferred)
        if (await Sharing.isAvailableAsync()) {
            await Sharing.shareAsync(uri, {
                mimeType: 'application/pdf',
                dialogTitle: 'Open PDF',
                UTI: 'com.adobe.pdf', // iOS hint
            });
        } else {
            console.warn('Sharing not available on this platform:', Platform.OS);
        }

        return uri;
    } catch (error) {
        console.error('PDF generation or sharing failed:', error);
        throw error;
    }
}


