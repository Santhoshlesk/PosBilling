import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from '@react-pdf/renderer';
import { log } from 'console';
import { InvoicePdf } from '../types';

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  companyInfo: {
    flexDirection: 'column',
  },
  invoiceTitle: {
    fontSize: 24,
    textAlign: 'right',
  },
  section: {
    marginBottom: 10,
  },
  table: {
    // display: '',
    width: 'auto',
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '25%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    paddingBottom: 5,
  },
  tableCol: {
    width: '25%',
    paddingVertical: 5,
  },
  tableCellHeader: {
    fontWeight: 'bold',
  },
  tableCell: {
    // Regular cell styling
  },
  totalSection: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  notes: {
    marginTop: 20,
    fontSize: 10,
  },
});

const InvoiceDocument:React.FC<{invoiceData:InvoicePdf}>= ({invoiceData}) => (
  
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.companyInfo}>
          <Image src={invoiceData.company.logo} style={{ width: 100, height: 100 }} />
          <Text>{invoiceData.company.name}</Text>
          <Text>{invoiceData.company.address}</Text>
          <Text>{invoiceData.company.city}</Text>
          <Text>{invoiceData.company.country}</Text>
        </View>
        <Text style={styles.invoiceTitle}>INVOICE</Text>
      </View>

      {/* Client Info */}
      <View style={styles.section}>
        <Text style={{ fontWeight: 'bold' }}>Bill To:</Text>
        <Text>{invoiceData.client.name}</Text>
        <Text>{invoiceData.client.address}</Text>
        <Text>{invoiceData.client.city}</Text>
        <Text>{invoiceData.client.country}</Text>
      </View>

      {/* Invoice Details */}
      <View style={styles.section}>
        <Text>Invoice #: {invoiceData.invoice.number}</Text>
        <Text>Invoice Date: {invoiceData.invoice.date}</Text>
        {/* <Text>Due Date: {invoiceData.invoice.dueDate}</Text> */}
      </View>

      {/* Items Table */}
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Description</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Quantity</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Rate</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Amount</Text>
          </View>
        </View>
        {/* Table Rows */}
        {invoiceData.invoice.items.map((item, index) => (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCol}>
              <Text>{item.name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>{item.quantity}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>{item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>{item.price * item.quantity}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Totals */}
      <View style={styles.totalSection}>
        <Text>Subtotal: ₹{invoiceData.invoice.subtotal.toFixed(2)}</Text>
        <Text>Tax: ₹{invoiceData.invoice.tax.toFixed(2)}</Text>
        <Text style={{ fontWeight: 'bold' }}>Total: ₹{invoiceData.invoice.total.toFixed(2)}</Text>
      </View>

      {/* Notes */}
      <View style={styles.notes}>
        <Text style={{ fontWeight: 'bold' }}>Notes:</Text>
        <Text>{invoiceData.invoice.notes}</Text>
      </View>

      {/* Terms */}
      <View style={styles.notes}>
        <Text style={{ fontWeight: 'bold' }}>Terms & Conditions:</Text>
        <Text>{invoiceData.invoice.terms}</Text>
      </View>
    </Page>
  </Document>
);

// Component to render the download link
const Invoice :React.FC<{data:InvoicePdf}> = ({data}) => {
  return <div>
  <PDFDownloadLink
   className="w-full py-2 px-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors" document={<InvoiceDocument invoiceData={data} />} fileName="invoice.pdf">
    {({ loading }) => (loading ? 'Loading document...' : 'Download Invoice')}
  </PDFDownloadLink>
</div>
}

export default Invoice;
