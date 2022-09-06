import { Button, Segmented, Timeline } from 'antd';
import React, { useEffect, useState } from 'react';
import Div from './Journey_sty';

function Journey(props) {
  const [value, setValue] = useState('left');
  const [data, setdata] = useState([])

  useEffect(() => {
    setdata([
      { label: '2015-09-01 09:12:11', content: 'Create a services' },
      { label: '2015-09-02 09:12:11', content: 'Create a services' },
      { label: '2015-09-03 09:12:11', content: 'Create a services' },
      { label: '2015-09-04 09:12:11', content: 'Create a services' },
    ])
  }, [])

  return (
    <Div>
      <Segmented options={['left', 'right', 'alternate']}
        value={value} onChange={setValue} />
      <Timeline pending="Continuing..." mode={value} >
        {
          data.map(item =>
            <Timeline.Item label={item.label} key={item.label}>{item.content}</Timeline.Item>
          )
        }
      </Timeline>
      <Button className='addJour' type='primary'>Add My Journey</Button>
    </Div>
  );
}

export default Journey;