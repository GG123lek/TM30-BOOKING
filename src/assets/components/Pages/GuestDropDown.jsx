const GuestDropdown = ({ guests, setGuests }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
  
    useEffect(() => {
      const close = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
    }, []);
  
    const handleSelect = (value) => {
      setGuests(value);
      setOpen(false);
    };
  
    return (
      <div className="relative w-full" ref={ref}>
        <div
          onClick={() => setOpen(!open)}
          className="p-2 border rounded-md cursor-pointer flex justify-between items-center"
        >
          <span>{guests ? `${guests} Guest${guests > 1 ? 's' : ''}` : "Select guests"}</span>
          <IoIosArrowDown className="text-gray-500" />
        </div>
  
        {open && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-48 overflow-y-auto">
            {[...Array(10)].map((_, i) => (
              <li
                key={i + 1}
                onClick={() => handleSelect(i + 1)}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {i + 1} Guest{i + 1 > 1 ? "s" : ""}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
export default GuestDropdown  