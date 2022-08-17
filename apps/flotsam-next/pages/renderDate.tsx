export function renderDate({ serverDate}: { staticDate: string, serverDate: string }) {
  return (<div>Timestamp: {serverDate}</div>);
}

export async function getServerSideProps() {
  return { props: {
      serverDate: new Date().toISOString()
    }
  }
}

export default renderDate;
