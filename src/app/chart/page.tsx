function BarChart() {
  return (
    <>
      <h1>This is bar chart</h1>
      <p>and this is coming from a different function inside this page</p>
    </>
  );
}

function Chart() {
  return (
    <>
      <h1>this is chart page</h1>
      <BarChart />
    </>
  );
}

export default Chart;
