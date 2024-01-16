function DocsDetails({ params }: { params: { slug: string[] } }) {
  if (params?.slug?.length === 1) {
    return (
      <>
        <h1>docs for {params.slug[0]}</h1>
      </>
    );
  }
  if (params?.slug?.length === 2) {
    return (
      <>
        <h1>
          docs for {params.slug[0]} feature {params.slug[1]}
        </h1>
      </>
    );
  }
  return (
    <>
      <h1>Default return page [[...slug]]</h1>
      <p>
        if we wanted to redirect to default return sate just use [[...slug]]
      </p>
    </>
  );
}

export default DocsDetails;
