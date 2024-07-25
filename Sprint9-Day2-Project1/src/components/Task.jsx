import { differenceInDays, formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';
import React from 'react';

const Task = ({ taskObj, onComplete }) => {
  const deadLine = new Date(taskObj.deadline);
  const terminText = formatDistanceToNow(deadLine, {
    locale: tr,
    addSuffix: true,
  });

  const terminClass =
    differenceInDays(deadLine, new Date()) < 3 ? 'bg-urgent' : 'bg-normal';
  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_0_rgb(0 0 0 / 10%)]">
      <h3 className="text-[#c8781a] text-lg">{taskObj.title}</h3>
      <div className=" pt-1 text-xs">
        son teslim:{' '}
        <span className={`${terminClass} inline-block rounded-sm px-2 py-1`}>
          {terminText}
        </span>
      </div>
      <p className="text-[#444] text-sm pb-3 pt-2">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="rounded-[30px] mb-1.5 mr-1 border-[#ccc] border-2 border-solid text-sm px-3 py-1.5 inline-block"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="cursor-pointer border-0 rounded-sm shadow-[0_4px_5px_0_rgb(0 0 0 / 5%)] bg-[#fecc91] ml-auto px-3 py-2 block "
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
