'use client';

const ErrorBoundry = ({error}: {error: Error}) => {
  return (
    <div>ErrorBoundry {error.message}</div>
  )
}

export default ErrorBoundry;
