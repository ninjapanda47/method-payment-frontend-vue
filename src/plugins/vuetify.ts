/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      dark: {
        colors: {
          primary: "#424242",
          secondary: "#a2a2a2",
          error: "#DC143C",
          info: "#2296f3",
          success: "#00bc8c",
          warning: "#FF8C00",
        },
      },
    },
  },
});
