
export function renderDateStatic({ staticDate }: { staticDate: string }) {
  return (<div>Timestamp: {staticDate}</div>);
}

export async function getStaticProps() {
  return {
    props: {
      staticDate: new Date().toISOString(),
    },
  }
}

export default renderDateStatic;
