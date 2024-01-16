'use client';

const ErrorBoundry = ({error, reset}: {error: Error, reset: () => void}) => {
  return (
    <>
      <div>ErrorBoundry {error.message}</div>
      <button onClick={reset}>try again</button>
    </>
  )
}

export default ErrorBoundry;
