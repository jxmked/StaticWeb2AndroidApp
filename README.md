# Attemping to use web view to act static web app as native app

This source also works with Android [AIDE](https://play.google.com/store/apps/details?id=com.aide.ui&hl=en&gl=US&referrer=utm_source%3Dgoogle%26utm_medium%3Dorganic%26utm_term%3Daide+apk&pcampaignid=APPU_1_FzQxY5DqIciK2roP3rSfwAw)

## How to use?

Just put all of your javascript, html and css files in `assets` folder and

Change these files according to your needs

- `build.gradle`
- `AndroidManifest.xml`
- All icons and images in `res` folder
- `res/values/strings.xml`
- `/main/java/io/xcreation/app/WebViewActivity.java`
- And the path to `WebViewActivity.java`

Inspired by [android-webpage-app](https://github.com/laxika/android-webpage-app)
