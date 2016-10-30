
import css from 'next/css';

export const Layout = {
    flexRow: css({
        display: 'flex',
        flexDirection: 'row'
    }),
    flexCol: css({
        display: 'flex',
        flexDirection: 'column'
    }),

    flexPrimaryCenter: css({
        justifyContent: 'center'
    }),

    flexSecondaryCenter: css({
        alignItems: 'center'
    }),
}
