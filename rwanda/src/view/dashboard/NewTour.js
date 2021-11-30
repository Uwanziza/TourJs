import React from 'react';
import DashLayout from '../../components/dashboardlayout';
import dashboardlayout from '../../components/dashboardlayout';
import{Form,Input,Space,DatePicker,InputNumber,Button,Select} from 'antd';
const NewtourView=()=>{
    const onFinish=(values)=>{
       console.log(values);
    }
    const { Option } = Select;
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="250">+250</Option>
            <Option value="256">+256</Option>
          </Select>
        </Form.Item>
      );
    return(
        <DashLayout>
        <Form onFinish={onFinish}>
          <Form.Item name='title'label='Title'rules={[{required:true}]
          }>
        <Input/>
          </Form.Item>

          <Form.Item name='descrption'label='Description'rules={[{required:true}]
          }>
        <Input.TextArea/>
          </Form.Item>
            <Space>
          <Form.Item name='seats'label='Seats'rules={[{required:true}]
          }>
        <Input type='number'/>
          </Form.Item>

          <Form.Item name='availabe'label='Available'rules={[{required:true}]
          }>
        <Input type='number'/>
          </Form.Item>
          </Space>

          <Space>
          <Form.Item name='dueDate'label='DueDate'rules={[{required:true}]
        
          }>
        <DatePicker/>
          </Form.Item>
          
         <Form.Item name='dateSchedule'label='DateSchedule'rules={[{required:true}]
        
    }>
  <DatePicker/>
    </Form.Item>
           </Space>

           <Form.Item name='phone'label='PhoneNumber'rules={[{required:true}]  
         }>
         <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
         </Form.Item> 

       


        <Button htmlType='submit' type='primary'> Register Tour</Button>
        </Form>
        </DashLayout>

    )
}
export default NewtourView;