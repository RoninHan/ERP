import { Button, DatePicker, Form, Input, InputNumber, Radio, Select } from 'antd';
import React, { useMemo } from 'react'

interface ISearchItem {
    type: string;
    name: string;
    title: string;
    post?: string;
    data?: any[];
    placeholder?: string;
}

interface ISearchFormProps {
    searchList: ISearchItem[],
    onCallBack: Function
}


export const SearchForm = (props: ISearchFormProps) => {
    const { searchList, onCallBack } = props;

    const [form] = Form.useForm();

    const list = useMemo(() => {
        return searchList.map((item: ISearchItem, index: any) => {
            switch (item.type) {
                case 'text':
                    return (
                        <Form.Item label={item.title} name={item.name} key={index}>
                            <Input placeholder={item.placeholder} />
                        </Form.Item>
                    );
                case 'number':
                    return (
                        <Form.Item label={item.title} name={item.name}>
                            <InputNumber placeholder={item.placeholder} />
                        </Form.Item>
                    );
                case 'select':
                    let options: any = []
                    if (item.post) return;
                    options = item.data;
                    return (
                        <Form.Item label={item.title} name={item.name}>
                            <Select>
                                {
                                    options.map((option: any, key: any) => <Select.Option value={option.value} key={key}>{option.label}</Select.Option>)
                                }
                            </Select>
                        </Form.Item>
                    );
                case "date":
                    return (
                        <Form.Item label={item.title} name={item.name}>
                            <DatePicker.RangePicker />
                        </Form.Item>
                    );
                default:
                    break;
            }
        })
    }, [searchList])


    return (
        <div>
            <Form
                layout={'inline'}
                form={form}
                initialValues={{ layout: "inline" }}
                style={{ maxWidth: 600 }}
            >
                {list}
                <Form.Item >
                    <Button type="primary" htmlType="submit" onClick={() => onCallBack(form)} >
                        搜索
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )

}