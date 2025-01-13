interface LookupResultProps {
    data: any;
  }
  
  const LookupResult = ({ data }: LookupResultProps) => {
    return (
      <div className="result-container">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };
  
  export default LookupResult;
  