import { Button, Segmented, Timeline, Modal, Input } from 'antd';
import {
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import Div from './Journey_sty';
const { confirm } = Modal;

function Journey(props) {
  //切换
  const [value, setValue] = useState('left');
  //数据
  const [data, setdata] = useState([])
  //是否添加状态
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  //确认添加
  const handleOk = () => {
    let item = {
      label: moment().format('YYYY-MM-DD HH:mm:ss'),
      content: myref.current.input.value
    }
    setdata([...data, item])
    setIsModalOpen(false);
  };
  //阻止对话框
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //删除item
  const handleDel = (index) => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',

      onOk() {
        let newarr = [...data]
        newarr.splice(index, 1)
        setdata(newarr)
      },
    });
  }

  useEffect(() => {
    setdata([
      { label: '2015-09-01 09:12:11', content: 'Create a services' },
      { label: '2015-09-02 09:12:11', content: 'Create a services' },
      { label: '2015-09-03 09:12:11', content: 'Create a services' },
      { label: '2015-09-04 09:12:11', content: 'Create a services' },
    ])
  }, [])
  const myref = useRef()

  return (
    <Div>
      <Segmented options={['left', 'right', 'alternate']}
        value={value} onChange={setValue} />
      <Timeline pending="Continuing..." mode={value} >
        {
          data.map((item, index) =>
            <Timeline.Item label={item.label}
              onClick={() => { handleDel(index) }}
              key={item.label}>{item.content}</Timeline.Item>
          )
        }
      </Timeline>
      <Button className='addJour' onClick={showModal} type='primary'>Add My Journey</Button>
      <Modal title="Add My Journey" visible={isModalOpen}
        onCancel={handleCancel}
        footer={
          <div>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleOk} type='primary'>Add</Button>
          </div>
        }>
        <Input ref={myref} />
      </Modal>
    </Div >
  );
}

export default Journey;