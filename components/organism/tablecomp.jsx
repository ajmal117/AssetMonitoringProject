import Table from '../molecules/table';

const classes = {
  table: 'w-full text-sm text-left  ',
  thead: 'text-sm  uppercase bg-[#F7F7F7] border-b text-gray-500  font-semibold',
  tbody: 'bg-white cursor-pointer',
  tr: 'text-[#121212] font-body text-sm text-left',
  th: 'px-6 py-4  truncate',
  td: 'px-6 py-4 text-sm font-normal  tracking-tighter turncate text-[#121212] border-t border-white',
};

const TableComp = ({
  headers,
  body,
  href,
  onClick,
  editItem,
  responseData,
  extraclasses,
}) => {


  return (
    <div className="h-auto py-8">
      <div className="relative overflow-x-auto rounded-lg">
        <Table
          headers={headers}
          data={body}
          classes={classes}
          href={href}
          extra={extraclasses}
          onClick={onClick}
          editItem={editItem}
          responseData={responseData}
        />
      </div>
    </div>
  );
};

export default TableComp;
