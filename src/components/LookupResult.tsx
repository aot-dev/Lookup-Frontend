interface LookupResultProps {
    data: string;
  }
  
  const LookupResult = ({ data }: LookupResultProps) => {
    return (
      <div className="result-container">
        <pre>{data}</pre>
      </div>
    );
  };
  
  export default LookupResult;
  