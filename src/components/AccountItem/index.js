import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/42d3b0ab62e4cd0a6531abf80e841a52~c5_300x300.webp?lk3s=a5d48078&nonce=99337&refresh_token=adaf7b11b05d938669ce2afcee76ac1d&x-expires=1737597600&x-signature=SFZial3cHO7%2BPNRIn%2BGN8GW2JIo%3D&shp=a5d48078&shcp=c1333099"
                alt="hoa"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
