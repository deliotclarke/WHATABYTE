import Layout from "../components/Layout";

const notCurrying = (a, b, c) => {
    console.log(a * b * c);
}

const currying = (a) => {
    return (b) => {
        return (c) => {
            console.log(a * b * c);
        }
    }
}

const ExploreView = props => <Layout>{currying(1)(2)(3)}</Layout>;

export default ExploreView;