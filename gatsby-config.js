module.exports = {
  siteMetadata: {
    htmlLang: "en",
    contenLang: "en-us",
    title: "Atlanta Vote Helper",
    titleTemplate: "%s · Atlanta Vote Helper",
    description:
      "An FAQ page for people who want to vote in Atlanta elections.",
    siteUrl: "https://atlvoterhelper.netlify.app",
    siteName: "Atlanta Vote Helper",
    logoUrl: "/images/peach.png",
    logoLabel: "Atlanta Vote Helper",
    searchText: "Search",
    faviconUrl: "/images/favicon.png",
    socialSharingImageUrl: "/images/screenshot.png",
    twitter: "",
    facebookUrl: "",
    ctaButtonText: "Open source on GitHub",
    ctaButtonUrl: "https://github.com/Bartlebyy/atlanta-voter-helper",
    linkText: "Illustration from Icons8",
    linkUrl: "https://www.icons8.com",
    headline: "What voting-related question do you have?",
    footerText: "About Me",
    footerUrl: "https://diego.medina.codes",
    googleTagManagerId: "",
    googleAnalyticsMeasurementId: "",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "@mlent/gatsby-theme-help-center",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
  ],
};
