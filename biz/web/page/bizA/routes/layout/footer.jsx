import * as React from 'react'
import { WrapperFooterCmp } from './styled'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WrapperFooterCmp>
                <div className="content">
                    <p>Made With &hearts; in AllenYu.</p>
                    <p>&copy; 2019 Airwallex & Co. All rights reserved.</p>
                </div>
            </WrapperFooterCmp>
        )
    }
}