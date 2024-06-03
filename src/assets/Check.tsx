const Check = () => {
    return (
<svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polyline points="20,50 40,70 80,30" fill="none" stroke="white" stroke-width="10" stroke-linecap="round">
    <animate 
      attributeName="stroke-dasharray" 
      from="0,100" 
      to="100,0" 
      dur="0.7s" 
      fill="freeze" />
  </polyline>
</svg>
    );
};

export default Check;        