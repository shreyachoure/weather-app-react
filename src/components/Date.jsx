const Date = () => {
  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
    
  }
  return (
    <div>
        <p>Day, Date</p>
    </div>
  )
}

export default Date