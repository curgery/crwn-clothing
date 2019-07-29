import React from 'react'
import { Route } from 'react-router-dom';
<<<<<<< HEAD
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';




class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();

    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-68598/databases/(default)/documents/'
    // )
    // .then(response => response.json())
    // .then(collections => console.log(collections));
  }
  
  
  render() {
    const { match } = this.props;
    return  (
      <div className="shop-page">
        <Route
         exact
         path={`${match.path}`}
         component={CollectionsOverviewContainer}
        />
        <Route
         path={`${match.path}/:collectionId`}
         component={CollectionPageContainer}
         />
      </div>
   );
  }
}  

=======
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'; 

import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'; 

import WithSpinner from  '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
  
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();  
  }
>>>>>>> 2bf3feee947c93878e5953e04695ccc91034a132

  render() {
    const { match, isFetchingCollections, isCollectionsLoaded } = this.props;

<<<<<<< HEAD
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
=======
return (
        <div className="shop-page">
             <Route
              exact
              path={`${match.path}`}
              render={props => (
                <CollectionsOverviewWithSpinner isLoading={isFetchingCollections} {...props} />
              )}
              />
             <Route
              path={`${match.path}/:collectionId`}
              render={props => (
                <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
              )}
              />
           </div>
     );
  }
} 

const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
>>>>>>> 2bf3feee947c93878e5953e04695ccc91034a132
});

 
export default connect(
  null,
<<<<<<< HEAD
  mapDispatchToProps
  )(ShopPage);
=======
  mapStateToProps,
  mapDispatchToProps
  )(ShopPage);

>>>>>>> 2bf3feee947c93878e5953e04695ccc91034a132
