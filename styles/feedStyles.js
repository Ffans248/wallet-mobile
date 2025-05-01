import { StyleSheet } from 'react-native';

export const feedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F8FF',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 30,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  qrIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    justifyContent:'center',
    alignItems: 'center'
  },
  bellIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  notificationText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  balanceCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  balanceAmount: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  username: {
    fontSize: 16,
    color: '#007EEF',
    marginTop: 5,
  },
  balanceText: {
    color: '#777',
    fontSize: 14,
    marginTop: 8,
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: '#002B5B',
  },
  transactionCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  noTransactionsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  noTransactionsSubtitle: {
    color: '#777',
    marginTop: 5,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    color: '#002B5B',
    fontWeight: '600',
  },
  navItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navItem: {
    fontSize: 12,
    color: '#007EEF',
    marginTop: 4,
  },
}  




);
