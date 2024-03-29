import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

function ResultCertPdfPreviewer(){
    Font.register({
        family: "Roboto",
        fonts: [
          {
            src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf",
            fontWeight: "normal",
          },
          {
            src: "https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu52xPKTM1K9nz.ttf",
            fontWeight: "normal",
            fontStyle: "italic",
          },
          {
            src: "https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51TLBBc9AMX6lJBP.ttf",
            fontWeight: "bold",
          },
        ],
      });


  // Create styles
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      width: "80vw",
    },
    document: {
      borderTop: "1px solid black",
      marginTop: "15%",
      marginLeft: 24,
      marginRight: 24,
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    title: {
      border: "1px solid black",
      textAlign: "left",
      margin: "0 auto",
      marginTop: 12,
      padding: "2 4",
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    pdf: {
      width: "100%",
      height: "80vh",
    },
    field: {
      display: "flex",
      flexDirection: "row",
      fontFamily: "Roboto",
      gap: 2,
    },
    footer: {
      marginTop: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    principal: {
      borderTop: "2px dotted black",
      marginTop: "8",
      paddingTop: 4,
    },
    bottom: {
      marginTop: 18,
    },
    value: {
      fontStyle: "italic",
    },
    italic: {
      fontStyle: "italic",
    },
  });
}

export default ResultCertPdfPreviewer;