// @ts-ignore
import { Twitter, Facebook, Telegram, VK } from 'react-social-sharing';
import React, {Component} from "react";
import {Translate} from "react-localize-redux";

class ShareBlock extends Component {
    render() {
        return <Translate>
            {({ translate }) => {
                const message = 'common.share_route_message_text';

                return <div id='share-block'>
                    <Twitter link={String(window.location)} title={translate(composeSocialText('twitter'))} message={translate(message)}/>
                    <Facebook link={String(window.location)} title={translate(composeSocialText('facebook'))} message={translate(message)}/>
                    <Telegram link={String(window.location)} title={translate(composeSocialText('telegram'))} message={translate(message)}/>
                    <VK link={String(window.location)} title={translate(composeSocialText('vk'))} message={translate(message)}/>
                </div>
            }}
        </Translate>
    }
}

const composeSocialText = (social: string) => {
    return ['common.share_route_with', social].join('_');
};

export default ShareBlock;