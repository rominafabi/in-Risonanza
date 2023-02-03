export function IconaOperatore(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      className={data.fill}
    >
      <path d="M6.8 20q-.75 0-1.275-.525Q5 18.95 5 18.2q0-.525.3-.988.3-.462.8-.662L10 15v-2.25q-1.35 1.575-3.137 2.412Q5.075 16 3 16v-2q1.7 0 3.088-.7 1.387-.7 2.512-2l1.35-1.6q.3-.35.7-.525.4-.175.85-.175h1q.45 0 .85.175.4.175.7.525l1.35 1.6q1.125 1.3 2.513 2Q19.3 14 21 14v2q-2.075 0-3.862-.838Q15.35 14.325 14 12.75V15l3.9 1.55q.5.2.8.662.3.463.3.988 0 .75-.525 1.275Q17.95 20 17.2 20H10v-.5q0-.65.425-1.075Q10.85 18 11.5 18h3q.225 0 .363-.137.137-.138.137-.363 0-.225-.137-.363Q14.725 17 14.5 17h-3q-1.05 0-1.775.725Q9 18.45 9 19.5v.5ZM12 8q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8Z" />
    </svg>
  );
}

export function IconaUtente(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      className={data.fill}
    >
      <path d="M9 22V8.775q-2.275-.6-3.637-2.513Q4 4.35 4 2h2q0 2.075 1.338 3.537Q8.675 7 10.75 7h2.5q.75 0 1.4.275.65.275 1.175.8L20.35 12.6l-1.4 1.4L15 10.05V22h-2v-6h-2v6Zm3-16q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Z" />
    </svg>
  );
}

export function IconaBack(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      width="40"
      fill={data.fill}
    >
      <path d="M20 33.333 6.667 20 20 6.667l1.958 1.958-10 10h21.375v2.75H11.958l10 10Z" />
    </svg>
  );
}

export function IconaHome(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={data.fill}
      height="24"
      width="24"
    >
      <path d="M5 20v-8H2l10-9 4 3.6V4h3v5.3l3 2.7h-3v8h-6v-6h-2v6Zm2-2h2v-6h6v6h2v-7.8l-5-4.5-5 4.5Zm2-6h6-6Zm1-1.975h4q0-.8-.6-1.313Q12.8 8.2 12 8.2q-.8 0-1.4.512-.6.513-.6 1.313Z" />
    </svg>
  );
}

export function IconaDropDown(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      fill={data.fill}
      className={data.classDropDown}
    >
      <path d="M10 12 6 8h8Z" />
    </svg>
  );
}

export function IconaPosition(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      fill={data.fill}
      className={`${data.fill}`}
    >
      <path d="M10 12.542q1.188 0 2.146-.594t1.5-1.531q-.771-.605-1.698-.948-.927-.344-1.948-.344t-1.948.344q-.927.343-1.698.948.542.937 1.5 1.531.958.594 2.146.594Zm0-4.167q.708 0 1.208-.5t.5-1.208q0-.709-.5-1.209-.5-.5-1.208-.5t-1.208.5q-.5.5-.5 1.209 0 .708.5 1.208t1.208.5ZM10 16q2.521-2.312 3.719-4.177 1.198-1.865 1.198-3.323 0-2.271-1.417-3.677-1.417-1.406-3.5-1.406T6.5 4.823Q5.083 6.229 5.083 8.5q0 1.458 1.198 3.323T10 16Zm0 2.333q-3.354-2.895-5.01-5.312Q3.333 10.604 3.333 8.5q0-3.146 2-4.99 2-1.843 4.667-1.843t4.667 1.843q2 1.844 2 4.99 0 2.104-1.657 4.521-1.656 2.417-5.01 5.312ZM10 8.5Z" />
    </svg>
  );
}

export function IconaSortByAlpha(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      className={`${data.fill}`}
    >
      <path d="m2 14 3-8h1.729l3 8H8.062l-.666-1.917H4.333L3.667 14Zm2.812-3.292h2.084l-1-2.979h-.084ZM11.146 14v-1.521l4.062-5.041h-3.875V6h5.625v1.521l-4.02 5.041H17V14ZM7.5 4.5 10 2l2.5 2.5ZM10 18l-2.5-2.5h5Z" />
    </svg>
  );
}

export function IconaSortByAtoZ(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-sort-alpha-down"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
      />
      <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
    </svg>
  );
}

export function IconaSortByZtoA(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-sort-alpha-up"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
      />
      <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
    </svg>
  );
}

export function IconaSortByNewest(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-sort-up-alt"
      viewBox="0 0 16 16"
    >
      <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
    </svg>
  );
}

export function IconaSortByOldest(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-sort-up-alt"
      viewBox="0 0 16 16"
    >
      <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
    </svg>
  );
}

export function IconaOperatorSearch(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      className={`${data.fill}`}
    >
      <path d="M9 10q-1.25 0-2.125-.875T6 7q0-1.25.875-2.125T9 4q1.25 0 2.125.875T12 7q0 1.25-.875 2.125T9 10Zm0-1.5q.625 0 1.062-.438Q10.5 7.625 10.5 7t-.438-1.062Q9.625 5.5 9 5.5t-1.062.438Q7.5 6.375 7.5 7t.438 1.062Q8.375 8.5 9 8.5Zm9.438 11-2.563-2.562q-.437.25-.906.406-.469.156-.969.156-1.458 0-2.479-1.021Q10.5 15.458 10.5 14q0-1.458 1.021-2.479Q12.542 10.5 14 10.5q1.458 0 2.479 1.021Q17.5 12.542 17.5 14q0 .5-.156.969t-.406.906l2.562 2.563ZM14 16q.833 0 1.417-.583Q16 14.833 16 14q0-.833-.583-1.417Q14.833 12 14 12q-.833 0-1.417.583Q12 13.167 12 14q0 .833.583 1.417Q13.167 16 14 16ZM3 16v-2q0-.521.26-.958.261-.438.719-.688 1.375-.792 2.906-1.135 1.532-.344 3.094-.177-.229.333-.427.698-.198.364-.323.76-1.187-.042-2.333.26-1.146.302-2.167.907-.104.041-.167.135-.062.094-.062.198v.5h4.521q.041.396.135.771t.261.729Zm6-9Zm.021 7.5Z" />
    </svg>
  );
}

export function IconaOrderByPrice1(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-sort-numeric-down"
      viewBox="0 0 16 16"
    >
      <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z" />
      <path
        fillRule="evenodd"
        d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"
      />
      <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
    </svg>
  );
}

export function IconaComune(data: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-bank"
      viewBox="0 0 16 16"
    >
      <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
    </svg>
  );
}

export default {
  IconaOperatore,
  IconaUtente,
  IconaBack,
  IconaHome,
  IconaDropDown,
  IconaPosition,
  IconaSortByAlpha,
  IconaSortByAtoZ,
  IconaSortByZtoA,
  IconaSortByNewest,
  IconaOperatorSearch,
  IconaSortByOldest,
  IconaComune,
};
