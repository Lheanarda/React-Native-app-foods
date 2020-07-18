import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization : 'Bearer Ce-m_4jtDjLkrRCV55UOWp2ryANbR6qzNgObX6PpjOM6Enr2mHkN0DGqMb6w8UftiVD7YVFIBJ83MyvFDdCNHE9S_BcJqrcgke4K4XaDxtwFvSQiJ5b2Jc9ZG0oIX3Yx'
    }
});

