const LeafIcon: React.FC<{ className?: string }> = ({ className }) =>  {
    return (
<svg width="17" height="13" viewBox="0 0 17 13" fill="none" 


xmlns="http://www.w3.org/2000/svg">
<path 

className={`leaf-icon ${className}`}

fill-rule="evenodd" clip-rule="evenodd" d="M6.74994 2.81514V0H8.24994V3.70686C10.8282 0.652898 15.8588 2.4645 16.3046 3.29039C17.0413 4.65556 14.1229 7.57641 14.1229 7.57641C14.1229 7.57641 11.7174 9.77102 8.24994 8.31481V12.5H6.74994V5.08468C3.90222 6.65863 1.87173 4.80613 1.87173 4.80613C1.87173 4.80613 -0.280484 2.65212 0.262851 1.64536C0.627126 0.970395 5.14398 -0.597327 6.74994 2.81514Z" fill="white"/>
</svg>


    );
}

export default LeafIcon;